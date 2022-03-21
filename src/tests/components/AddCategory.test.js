import React from "react"
import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"

describe('Pruebas en <AddCategory/>', () => { 

    const setCategories =jest.fn() ;
   let wrapper =shallow(<AddCategory setCategories={setCategories}/>)

    
    beforeEach(()=>{
        jest.clearAllMocks()
         wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    })
    
    test('debe de mostrarse correctamente', () => { 

        expect(wrapper).toMatchSnapshot()

     })

     test('debe de cambiar la caja de texto', () => { 
         const input = wrapper.find("input")
         const value = "Hola Mundo"
         input.simulate("change",{target:{value:value}})

         expect(wrapper.find("p").text().trim()).toBe(value)
      })


      test('No debe enviarse con submit', () => { 

        wrapper.find("form").simulate("submit",{preventDefault(){}})
        
        expect(setCategories).not.toHaveBeenCalled()
       })

       test('debe de llamar el setCategories y limpiar la caja de texto', () => { 

        const value = "hola mundo input"
        // 1 simular el inputChange
        wrapper.find("input").simulate("change",{target:{value} })
       
        // 2simular el Submit
        wrapper.find("form").simulate("submit",{preventDefault(){}})

        //setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledTimes(1)
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

        //el valor del input debe de estar ""

        expect(wrapper.find("input").prop("value")).toBe("")


        


        })
 })