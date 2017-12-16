import leagues from '../images/leagues'

export const getDivisionImage = division => {
  const league = division
    ? leagues[division.tier.toLowerCase()]
    : null
  const rank = league
    ? league[division.rank.toLowerCase()]
    : null
  return rank || leagues.unranked
}

export const getDivisionText = division =>
  division
    ? `${division.tier.toUpperCase()} ${division.rank.toUpperCase()}`
    : 'UNRANKED'

export const getWinrate = rank =>
  rank
    ? `${Math.ceil((rank.wins / (rank.wins + rank.losses)) * 100)}%`
    : '/'
