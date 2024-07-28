const CaseStudies = () => {
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Casos de Éxito</h2>
          <p className="mb-8">
            Descubre cómo hemos ayudado a otras empresas a crecer.
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Caso de Éxito 1</h3>
                <p className="text-gray-700 mb-4">Descripción breve del caso de éxito 1.</p>
                <a href="#case1" className="text-blue-600 hover:underline">Leer más</a>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Caso de Éxito 2</h3>
                <p className="text-gray-700 mb-4">Descripción breve del caso de éxito 2.</p>
                <a href="#case2" className="text-blue-600 hover:underline">Leer más</a>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Caso de Éxito 3</h3>
                <p className="text-gray-700 mb-4">Descripción breve del caso de éxito 3.</p>
                <a href="#case3" className="text-blue-600 hover:underline">Leer más</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CaseStudies;
  