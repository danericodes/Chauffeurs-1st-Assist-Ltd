import '../styles/reveal.css'
import { motion } from 'motion/react'

export default function Reveal({ children, delay = 0, as = 'div', className = '', style, ...rest }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={`reveal ${className}`.trim()}
      style={style}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.62, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
