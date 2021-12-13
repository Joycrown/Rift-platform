import React from 'react';





function FAQ(){
    return(
        <section className = 'container'>
            <h1 className = 'text-center faq faq-tab faq-mob'> FAQ</h1>
            <div className = 'd-flex justify-content-around'>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button acco-1 acco-1-tab acco-1-mob" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Is Rift Link an investment platform?
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body acco-2 acco-2-tab acco-2-mob">
                            <strong>No,</strong> Rift Link is a copytrading software that connects your metatrader 4/5 account to a control account run by a combination of automated and manual trading.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed acco-1 acco-1-tab acco-1-mob" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Do I need to give you my money?
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body acco-2 acco-2-tab acco-2-mob">
                            <strong>No,</strong> you are only required to fund your Metatrader 4/5 account which you will then connect to our software.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed acco-1 acco-1-tab acco-1-mob" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How do I make money?
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body acco-2 acco-2-tab acco-2-mob">
                            The Rift Link control account is run by a mix of robots powered by accurate trading algorithms and manual trades executed by top notch institutional type analysts to ensure consistent profitability.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed acco-1 acco-1-tab acco-1-mob" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            What is my profit potential?
                        </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body acco-2 acco-2-tab acco-2-mob">
                        <strong>We do not guarantee unrealistic earnings,</strong> our principle is the consistent accumulation of little profits, this approach ensures that your capital generates constant income under strict risk management protocols. 
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button collapsed acco-1 acco-1-tab acco-1-mob" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            How is Rift Link different?
                        </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div class="accordion-body acco-2 acco-2-tab acco-2-mob">
                        <strong>With Rift Link, you are in full control of your capital,</strong> you can decide to discontinue the service anytime at no cost. Also you get to build a stable stream of consistent passive income. 
                        </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
)
}

export default FAQ;