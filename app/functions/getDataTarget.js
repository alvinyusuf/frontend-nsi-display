export default async function getDataTarget() {
  try {
    const res = await fetch('http://192.168.10.75:5000/api/target/get-target', {next: {revalidate: 0}})

    if (!res.ok) {
      throw new Error('failed to fetch')
    }

    const result = await res.json()
    const { data } = result.payload
    const target = {
      maintenance: data.target_maintenance,
      qmp: data.target_qmp,
    }
    return target
  } catch (error) {
    console.error(error)
    return {
      maintenance: 2750,
      qmp: 20000000,
    }
  }
}
