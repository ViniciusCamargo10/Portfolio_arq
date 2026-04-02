import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface CardProjetoProps {
  id: string;
  title: string;
  image: string;
  type: string;
  location: string;
  year: number;
  size?: 'sm' | 'md' | 'lg';
}

export function CardProjeto({
  id,
  title,
  image,
  type,
  location,
  year,
  size = 'md',
}: CardProjetoProps) {
  const sizeClasses = {
    sm: 'h-64',
    md: 'h-80',
    lg: 'h-96',
  };

  return (
    <Link to={`/projeto/${id}`}>
      <motion.div
        className={`relative ${sizeClasses[size]} rounded-lg overflow-hidden group cursor-pointer`}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white/80 text-sm mb-2">{type}</p>
            <h3 className="text-white text-2xl font-serif mb-2">{title}</h3>
            <p className="text-white/70 text-sm mb-4">
              {location} • {year}
            </p>

            {/* Hover Label */}
            <motion.div
              className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              <span className="text-sm font-medium">Ver estudo de caso</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>

        {/* Elevation Effect */}
        <div className="absolute inset-0 shadow-lg group-hover:shadow-2xl transition-shadow pointer-events-none" />
      </motion.div>
    </Link>
  );
}
