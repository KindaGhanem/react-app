import Carousel from 'react-bootstrap/Carousel';


export default function Header (){
    return (
    <Carousel>
        <Carousel.Item className='w-100' style={{ height:'100vh'}}>
            <img src='./src/assets/images/flower4.jpg' className='w-100' style={{ height:'100vh'}}></img>
            <Carousel.Caption className='text-black'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='w-100' style={{ height:'100vh'}}>
        <img src='./src/assets/images/flower4.jpg' className='w-100' style={{ height:'100vh'}}></img>
            <Carousel.Caption className='text-black'>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption >
        </Carousel.Item>
        <Carousel.Item className='w-100' style={{ height:'100vh'}}>
        <img src='./src/assets/images/flower4.jpg' className='w-100' style={{ height:'100vh'}}></img>
            <Carousel.Caption className='text-black'>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )

}