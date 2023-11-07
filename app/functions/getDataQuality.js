export default async function getDataQuality() {
  try {
    const res = await fetch('http://192.168.10.75:5000/api/quality/report', {next: {revalidate: 3600}})

    if (!res.ok) {
      throw new Error('failed to fetch')
    }

    const result = await res.json()
    const { data } = result.payload
    return data
  } catch (error) {
    console.error(error)
    return {
      percentCamIpqc: 0,
      percentCncIpqc: 0,
      percentMfgIpqc: 0,
      percentCamOqc: 0,
      percentCncOqc: 0,
      percentMfgOqc: 0,
    };
  }
}
