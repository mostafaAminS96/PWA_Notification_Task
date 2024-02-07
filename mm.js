const checkPermissions=()=>{
    if(!('serviceWorker' in navigator)){
        throw new Error('not support service workers')
    }
    if(!('Notification' in window)){
        throw new Error('Notifications not supported')
    }
}

const registerSer=async ()=>{
    const register=await navigator.serviceWorker.register('m.js');
    return register;
}

const requestPermision=async ()=>{
     const permision=await Notification.requestPermission();
     if(permision !== 'granted'){
         throw new Error('Permision Not Granted')
     }else{
         new Notification('Hello ^_^')
     }
}

const main= async()=>{
    checkPermissions()
    var registeration=await registerSer()
    registeration.showNotification('regist ya hamada plz ^_^',{
        icon:'./img1.png',
        image:"./logoimg.png",
        body: 'Simple piece of body text.\nSecond line of body text :)',
    })
    
}
main()


