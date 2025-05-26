import PropTypes from "prop-types";

export const SectionHeader = ({ title, eyebrow, description }) => {
    return (
        <>
         <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent ">{eyebrow}</p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">{title}</h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
            {description}
        </p>
        </>
    );
};

// Runtime prop validation (important in .jsx)
SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  eyebrow: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};