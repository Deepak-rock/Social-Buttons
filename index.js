const Button = props => {
  const {name, color} = props
  return <button className={`button ${color}`}>{name}</button>
}

const element = (
<div className = 'container'>
  <div className='bg-img-con'>
    <h1 className='heading'>Social Button</h1>
    <div className = "button-con ">
      <Button name='like' color='yellow' />
      <Button name='Comment' color='white' />
      <Button name='Share' color='blue' />
    </div>
  </div>
</div>
)

ReactDOM.render(element, document.getElementById('root'))
