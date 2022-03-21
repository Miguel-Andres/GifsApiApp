import { renderHook } from "@testing-library/react-hooks"
import { useFetchGifs } from "../../hooks/useFetchGifs"



describe("Test Hook useFetchGifs",()=>{

    test('debe de retornar el estado inicial', async() => {

       const {result,waitForNextUpdate} = renderHook(()=>useFetchGifs("jordan") )
       const {data,loading}= result.current
        console.log(loading)
        await waitForNextUpdate()

        expect(data).toEqual([])
        expect(loading).toBe(true)
     })
        
     test('debe de return un array gifs y loading false',async () => { 

        const {result,waitForNextUpdate} = renderHook(()=>useFetchGifs("jordan") )
        await waitForNextUpdate()
        const {data,loading}= result.current
         
 
         expect(data.length).toBe(10)
         expect(loading).toBe(false)

      })
})