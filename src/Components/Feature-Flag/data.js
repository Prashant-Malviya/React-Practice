
const dummyApiResponse = {
    showLightAndDarkMode : true,
    showTiTacBoard : true,
    showRandomColorGenerator : true,
    showAccordian : true,
    showTreeview : true,
    showTabs : true
}

function featureFlagsDataServiceCall(){

    return new Promise((resolve,reject) => {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse),500)
        else reject('some error occured! please try again')
    })
}

export default featureFlagsDataServiceCall;