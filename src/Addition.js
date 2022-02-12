const Addition = ({ numOne, numTwo }) => {
  const sum = numOne + numTwo;

  return (
    <p>Adding {numOne} to {numTwo} gives you {sum}.</p>
  )
}

export default Addition;