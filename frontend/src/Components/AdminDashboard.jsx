import { Box } from '@chakra-ui/react'
import React from 'react'
import Chart from 'react-apexcharts'
export const AdminDashboard = () => {
  return (
    <Box>
          <Box mt='100px'>
        <Chart
         mt={300}
         type="donut"
         width={1000}
         height={500}
         series={[100, 200, 175, 60]}
         
         options={{
           labels: ["Child", "Customers", "Women", "Men"],
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
