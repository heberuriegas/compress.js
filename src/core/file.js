
const load = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new window.FileReader()
    fileReader.onload = (evt) => {
      resolve(evt.target.result)
    }

    fileReader.onerror = (err) => {
      reject(err)
    }

    fileReader.readAsDataURL(file)
  })
}

export default { load }
