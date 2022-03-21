import React from "react"
import { shallow } from "enzyme"
import GifGridItem from "../../components/GifGridItem"


describe("Pruebas en <GifGridItem/>" ,()=>{

    const title ="hola soy el titulo test" ;
    const url = "htpp://urlimagetest.com"
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test("debe de mostrar el componente correctamente" ,()=>{

        expect(wrapper).toMatchSnapshot()
    })

    test('debe de tener un parrafo con el titulo', () => { 

        const img = wrapper.find("img")
        //console.log(img.props())

        expect(img.props().alt).toBe(title)
        expect(img.prop("src")).toBe(url)

     })


     test('debe de tener animate__fadeIn', () => { 

        const div= wrapper.find("div")
        const className = div.prop("className")

        expect(className.includes("animate__fadeIn")).toBe(true)

       // expect(div.hasClass("animate__fadeIn")).toBe(false) esta la hice con la documentacion salio OK
        

      })


})