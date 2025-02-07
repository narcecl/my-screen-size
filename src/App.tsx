import useWindowDimensions from './hooks/useWindowDimensions';
import useBrowser from './hooks/useBrowser';

function App() {
    const { width, height } = useWindowDimensions();
    const { os, browser, browserVersion, userAgent } = useBrowser();

    return (
        <main className="max-w-3xl px-5 mx-auto h-full flex flex-col pb-4">
            <div className="flex flex-col h-full items-center justify-center gap-12">
                <div>
                    <p className="text-7xl sm:text-8xl text-white text-center font-bold flex items-center justify-center gap-4">
                        { width}
                        <span className="text-xl">x</span>
                        {height}
                    </p>
                    <p className="text-white text-center text-sm opacity-50">{ userAgent }</p>
                </div>

                <div className="flex gap-12">
                    <p className="text-white text-center">
                        <mark className="bg-transparent font-bold text-white block opacity-80">OS</mark>
                        <span className="opacity-60">{ os }</span>
                    </p>
                    <p className="text-white text-center">
                        <mark className="bg-transparent font-bold text-white block opacity-80">Browser</mark>
                        <span className="opacity-60">{ browser } ({browserVersion})</span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-1.5">
                <p className="text-center text-sm text-white">
                    Desarrollado con amor por <a href="https://narce.cl" target="_blank" rel="noreferrer noopener" className="text-sky-500 hover:underline">Nicolás Arce</a>.
                </p>
                <p className="text-center text-sm text-white">
                    Si hay algún <a href="mailto:hola@narce.cl" target="_blank" rel="noreferrer noopener" className="text-sky-500 hover:underline">error enviame un mensaje</a>.
                </p>
            </div>
        </main>
    )
}

export default App;
