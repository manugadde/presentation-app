import React, { useEffect } from 'react';

const Embeddable: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://js.arcgis.com/embeddable-components/4.31/arcgis-embeddable-components.esm.js';
        document.head.appendChild(script);
    }, []);

    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                {/* <h2 className="medium-font" style={{ color: 'Black' }}>Disability By Type</h2> */}
            </div>

            <div className="container" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="row">
                    <div className="column1">
                        <h1 className="medium-font" style={{ color: 'Black' }}><b>EMBEDDABLE COMPONENT</b></h1>
                        <p>
                            This map shows the percentage of people with disabilities by type in the United States.
                        </p>
                    </div>
                    <div className="column2">
                        <div
                            style={{ height: '500px', width: '65%', right: '50px' }}
                            dangerouslySetInnerHTML={{
                                __html: `
                                    <arcgis-embedded-map
                                        style="height: 100%; width: 100%;"
                                        item-id="22e78b02236b4c93be2e7351ca0f4a9d"
                                        theme="light"
                                        portal-url="https://arcgis.com"
                                        legend-enabled information-enabled share-enabled
                                    ></arcgis-embedded-map>
                                `,
                                
                            }}
                            
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Embeddable;
