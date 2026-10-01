import '../styles/page-transition.css'
import { motion } from 'motion/react'
import { useLocation } from 'react-router-dom'

export default function PageTransition({ children }) {
  const { pathname } = useLocation()
  return (
    <motion.div
      key={pathname}
      className="page-transition"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
