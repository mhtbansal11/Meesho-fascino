import { Box } from '@chakra-ui/react'
import React,{useEffect,useState} from 'react'
import Chart from 'react-apexcharts'
import axios from 'axios'
import { AdminNavbar } from './AdminNavbar'
export const AdminDashboard = () => {

  let [products, setProducts] = useState([])

    const getData = () => {
        axios.get(`https://hungry-loincloth-calf.cyclic.app/products`)
            .then((res) => {
                setProducts(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }


    useEffect(() => {
    getData()
    }, [])

    console.log('dashboard',products)
let x=products.filter((el)=>el.category=="T-shirt").length
let jeans=products.filter((el)=>el.category=="Jeans").length
let jacket=products.filter((el)=>el.category=="Jacket").length
let pants=products.filter((el)=>el.category=="Pants").length
let Sweatshirt=products.filter((el)=>el.category=="Sweatshirt").length
let Kurta=products.filter((el)=>el.category=="Kurta").length


  return (
    <Box>
       
          <Box mt='100px'>
        <Chart
         mt={300}
         type="donut"
         width={1000}
         height={500}
         series={[x, jeans, jacket,pants,Sweatshirt,Kurta]}
         
         options={{
           labels: ["T-shirt", "Jeans", "Jacket", "Pants","Sweatshirt","Kurta"],
           noData: { text: "Empty Data" },
           dropShadow: {
             enabled: true,
             top: 0,
             left: 0,
             blur: 3,
             opacity: 0.5,
           },
        //    theme:{monochrome:{enabled:true}}
        color:'red'
         }}
        >

        </Chart>
        </Box>
    </Box>
  )
}
