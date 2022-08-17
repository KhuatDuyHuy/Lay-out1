import '../Pasge/Gd3.css';

function Gd3() {
    return (
        <div>
            <div class="container mt-5 mb-5">
                <div class="row g-2">
                    <div class="col-md-6">
                        <div class="card bg-white p-3 px-4 d-flex justify-content-center">
                            <h5 class="mb-0">Standard Plan</h5>
                            <span class="price">$19/month</span>
                            <div class="mt-4">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span>All features</span>
                                    <span>1 Minute trigger</span>
                                </div>

                                <div class="d-flex justify-content-between align-items-center">
                                    <span>5000 interactions</span>
                                    <span>Remove branding</span>
                                </div>

                                <div class="d-flex justify-content-between align-items-center">
                                    <span>15 bots</span>
                                    <span>Priority support</span>
                                </div>
                            </div>
                            <div class="mt-4">
                                <button class="btn btn-danger">Start Free</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">

                        <div class="card">

                            <div class="d-flex flex-column">
                                <div class="pricing-1 d-flex justify-content-between">
                                    <div>
                                        <span class="d-block">Add 5 bots or active flow</span>
                                        <span class="font-weight-bold">+ $10/month</span>
                                    </div>
                                    <div class="circle">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <div class="pricing-1 d-flex justify-content-between">
                                    <div>
                                        <span class="d-block">Add 8 bots or active flow</span>
                                        <span class="font-weight-bold">+ $20/month</span>
                                    </div>
                                    <div class="circle">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Gd3;