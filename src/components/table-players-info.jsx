// TODO

const players = [
  { name: 'omar', pvp: 22, pk: 30 },
  { name: 'Pedro', pvp: 22, pk: 30 },
  { name: 'Wolf', pvp: 22, pk: 30 },
  { name: 'Test', pvp: 22, pk: 30 },
]
const TablePlayerInfo = () => {
  return (
    <table className='table is-striped  '>
      <thead>
        <tr>
          <th title='Nº'>Nº</th>
          <th title='Player'>Player</th>
          <th title='PVP'>PVP</th>
          <th title='PK'>PK</th>
        </tr>
      </thead>
      <tbody>
        {players.map(({ name, pvp, pk }, index) => (
          <tr key={index}>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{pvp}</td>
            <td>{pk}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default TablePlayerInfo
