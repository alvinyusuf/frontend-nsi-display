export default async function getDataProduction() {
  try {
    const res = await fetch(`http://192.168.10.75:5000/api/production/percen`, {next: {revalidate: 3600}})

    if (!res.ok) {
      throw new Error('failed to fetch')
    }

    const result = await res.json()
    const { data } = result.payload
    return data
  } catch (error) {
    console.error(error);
    return [
      {
        PostDate: new Date(),
        LineType: 'CAM',
        RataRata: 0,
      },
      {
        PostDate: new Date(),
        LineType: 'LINE1',
        RataRata: 0,
      },
      {
        PostDate: new Date(),
        LineType: 'LINE2',
        RataRata: 0
      },
      {
        PostDate: new Date(),
        LineType: 'LINE3',
        RataRata: 0,
      },
    ]
  }
}
