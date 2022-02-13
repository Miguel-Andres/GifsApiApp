

export const getGifs=async(category)=>{
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&key=ahaQdgm0lwk2WojWtS75JrkOmfMg03Du`
    const resp =await fetch(url)
    const {data} = await resp.json()  

   const gifs = data.map(item=>{
       return{
           id: item.id,
           title : item.title,
           url : item.images?.downsized_medium.url

       }
   })

   return gifs

}