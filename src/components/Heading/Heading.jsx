
const Heading = ({title, subtitle}) => {
    return (
        <div>
            <h1 className="font-bold text-3xl text-white md:text-4xl lg:text-5xl mb-6">{title}</h1>
            <p className="font-normal text-base text-white mb-6 lg:w-3/5 mx-auto">{subtitle}</p>
        </div>
    );
};

export default Heading;