const Button = props => {
  const {name, color} = props
  return <button className={color}>{name}</button>
}

const element = (
  <div className='bg-img-con'>
    <h1 className='heading'>Social Button</h1>
    <Button name='like' color='yellow' />
    <Button name='Comment' color='white' />
    <Button name='Share' color='blue' />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
