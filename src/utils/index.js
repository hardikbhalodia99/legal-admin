export const loadRazorpay = async () => {
  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

  if (!res) {
      console.log('Razorpay SDK failed to load. Are you online?')
      return
  }
}
export const loadScript = async (src) => {
  const exists = Array.from(document.getElementsByTagName('script')).filter(
      (script) => script.src === 'https://checkout.razorpay.com/v1/checkout.js'
  )
  if (!exists.length) {
      return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
          resolve(true)
      }
      script.onerror = () => {
          resolve(false)
      }
      document.body.appendChild(script)
      })
  }
}

export function validateEmail(email){
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(email.match(regex)){
        return true
    }else{
        return false
    }
}

export function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }