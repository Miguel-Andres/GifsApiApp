import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"

describe('test <GifExpertApp/>', () => { 

    test('debe mostrarse el componente', () => { 
        
        const wrapper = shallow(<GifExpertApp/>)

        expect(wrapper).toMatchSnapshot()


     })

     test('debe de mostrar una lista de category', () => { 

        const categories = ["jordan","cr7"]
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find("GifGrid").length).toBe(categories.length)
      })
 })