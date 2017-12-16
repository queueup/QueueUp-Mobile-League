/* eslint react/prop-types: 0 */

import React from 'react'
import { apiWrapper } from '../utils'
import GoalsPicker from '../components/goals-picker'
import RolesPicker from '../components/roles-picker'
import SummonerInfos from '../components/summoner-infos'
import { circularTarget, defense, knight } from '../images'
import { ApiSync } from '../utils'

import I18n from '../i18n'

export const steps = [
  {
    index: 1,
    image: defense,
    title: I18n.t('accountDetails_detailsTitle'),
    description: I18n.t('accountDetails_detailsDescription'),
    component: props => <SummonerInfos {...props}/>,
    onSubmit: ({
      summonerName,
      region,
      setError,
      resetErrors,
      nextStep,
      updateField,
      dispatch,
    }) => {
      resetErrors()
      let errors = false
      if (region.length < 1) {
        errors = true
        setError('region', I18n.t('global_errorRequired').toLowerCase())
      }
      if (summonerName.length < 1) {
        errors = true
        setError('summonerName', I18n.t('global_errorRequired').toLowerCase())
      }
      if (!errors) {
        apiWrapper
          .createLeagueProfile({
            summonerName,
            region: region.platform,
          })
          .then(r => {
            updateField('profileId', r.data.id)
            nextStep()
            const apiSync = new ApiSync(dispatch)
            apiSync.initialSync()
          })
          .catch(r => {
            if (r.response.data) {
              Object.keys(r.response.data)
                .forEach(key =>
                  key === 'summoner_id'
                    ? setError('global', I18n.t('global_errorWrongAccount').toLowerCase())
                    : setError(key, r.response.data[key].join(',')))
            } else {
              setError('global', I18n.t('global_errorUsedAccount'))
            }
          })
      }
    },
  },
  {
    index: 2,
    image: knight,
    title: I18n.t('accountDetails_rolesTitle'),
    description: I18n.t('accountDetails_rolesDescription'),
    component: ({
      onChange,
      roles,
    }) => <RolesPicker onChange={v => onChange('roles', v)} selectedRoles={roles} />,
    onSubmit: ({
      roles,
      nextStep,
    }) => {
      apiWrapper
        .updateLeagueProfile({roles})
      nextStep()
    },
  },
  {
    index: 3,
    image: circularTarget,
    title: I18n.t('accountDetails_goalTitle'),
    description: I18n.t('accountDetails_goalDescription'),
    component: ({
      onChange,
      goals,
    }) => <GoalsPicker onChange={v => onChange('goals', v)} selectedGoals={goals} />,
    onSubmit: ({
      goals,
      nextStep,
    }) => {
      apiWrapper
        .updateLeagueProfile({goals})
      nextStep()
    },
  },
]
