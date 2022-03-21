import { shallow } from "enzyme"
import GifGrid from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"
jest.mock("../../hooks/useFetchGifs")


describe('test a componente <GifGrdi/>', () => { 

    
    
    test("debe mostrarse correctamente el componente",()=>{
        
        useFetchGifs.mockReturnValue({
            data :[],
            loading:true
        })

        const category = "jordan"
        const wrapper = shallow(<GifGrid category={category}/>)

        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar item cuando se llama a useFetchGifs', () => { 

        const gifs = [
            {id:"abc",url:"http://Api.com",title:"anything"},
            {id:"abc",url:"http://Api.com",title:"anything"}

        ]
        useFetchGifs.mockReturnValue({
            data :gifs,
            loading:false 
        })

        const category = "jordan"
        const wrapper = shallow(<GifGrid category={category}/>)

        // expect(wrapper).toMatchSnapshot()
        expect(wrapper.find("p").exists()).toBe(false)
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length)
     
     })
 })