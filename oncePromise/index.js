const ipAssistObj = {
    prom: null,
    ipCache: undefined,
    nowTime: null,
  }
  async function oncePromise(func){
    // const now = new Date().getTime();
    // if (typeof ipAssistObj.ipCache !== 'undefined' && ipAssistObj.nowTime && now - ipAssistObj.nowTime < 30000) { 
    //   return ipAssistObj.ipCache;
    // }
    if(ipAssistObj.prom){
      return await ipAssistObj.prom;
    }else{
      ipAssistObj.prom = func;
      ipAssistObj.prom.finally(()=>{
        ipAssistObj.prom = null;
      })
      const res = await ipAssistObj.prom;
      ipAssistObj.ipCache = res;
      ipAssistObj.nowTime = new Date().getTime();
      return res;
    }
  }