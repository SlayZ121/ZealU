const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-16">
      <div className="max-w-lg text-center">
        <div className="relative grid grid-cols-6 gap-6 mb-10">
          {[...Array(24)].map((_, i) => {
            const isLastColumn = (i + 1) % 6 === 0; // indices 5,11,17,23

            return (
              <div
                key={i}
                className={`
                  rounded-full
                  ${
                    isLastColumn || i % 3 === 0
                      ? "bg-primary/40 animate-pulse"
                      : "bg-primary/20"
                  }
                  w-20 h-20
                  ${
                    i % 2 === 0
                      ? "translate-x-6 translate-y-6"
                      : "translate-x-0 translate-y-0"
                  }
                  transition-transform duration-500
                `}
                style={{ zIndex: 25 - i }}
              />
            );
          })}
        </div>
        <h2 className="text-4xl font-extrabold mb-5">{title}</h2>
        <p className="text-base-content/70 text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
