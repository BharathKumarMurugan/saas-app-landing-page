import React from 'react'
import { Link } from 'react-scroll'

interface LinkScrollProps {
  title: string;
}

const LinkScroll: React.FC<LinkScrollProps> = ({title}) => {
  return (
    <Link to=""  className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">{title}</Link>
  )
}

export default LinkScroll