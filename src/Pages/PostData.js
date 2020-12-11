export function PostData(userData) {
    
    let BaseUrl = 'http://102.164.38.38/Dayspring/api/Authenticate/SigInCustomer';

    return new Promise((resolve, reject) => {

        fetch(BaseUrl,{
            method: 'POST',
            headers: {
                "Content-Type": "text/plain"
            },
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            resolve(responseJson);
            console.log(responseJson);
        })
        .catch((error) => {
            reject(error);
        });
    })
}