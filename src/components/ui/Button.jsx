


export default function Button({text, textColor, action, color, borderColor, borderWidth}) {
 
  return (
    <button
      className={` bg-${color} border-${borderWidth} text-${textColor} m-2 py-2 px-4 rounded-md shadow-md hover:opacity-80`}
      onClick={action}>
      {text}
    </button>
  )
}