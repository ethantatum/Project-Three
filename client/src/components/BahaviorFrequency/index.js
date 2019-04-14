import React from "react";
import "./style.css";

function BehaviorFrequency(props) {

    return (
        <React.Fragment>
            <div className="container-fluid p-2">
                <h1>Behavior Frequency Counters</h1>

                <form class="form-inline">
                    <h3>Observation Length (minutes): </h3>
                    <select class="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                    </select>

                    <button type="button" class="btn btn-outline-light" id="beginBtn">Begin Observation</button>
                    </form>

                <h3>Negative Behaviors</h3>
                <div class="row">
                    <div class="col-md-4">
                        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-danger">-</button>
                            <span class="bg-danger">Hiting</span>
                            <button type="button" class="btn btn-danger">+</button>
                        </div> <br />

                        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-danger">-</button>
                            <span class="bg-danger">Kicking</span>
                            <button type="button" class="btn btn-danger">+</button>
                        </div><br />

                        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-danger">-</button>
                            <span class="bg-danger">Scratching</span>
                            <button type="button" class="btn btn-danger">+</button>
                        </div><br />

                        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-danger">-</button>
                            <span class="bg-danger">Biting</span>
                            <button type="button" class="btn btn-danger">+</button>
                        </div><br />


                        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-danger">-</button>
                            <span class="bg-danger">Spitting</span>
                            <button type="button" class="btn btn-danger">+</button>
                        </div><br />
                    </div>

                    <div class="col-md-4">

                        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-danger">-</button>
                            <span class="bg-danger">Elopement</span>
                            <button type="button" class="btn btn-danger">+</button>
                        </div><br />

                        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-danger">-</button>
                            <span class="bg-danger">Yelling</span>
                            <button type="button" class="btn btn-danger">+</button>
                        </div><br />

                        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-danger">-</button>
                            <span class="bg-danger">Self Injury</span>
                            <button type="button" class="btn btn-danger">+</button>
                        </div><br />

                        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-danger">-</button>
                            <span class="bg-danger">Property Destruction</span>
                            <button type="button" class="btn btn-danger">+</button>
                        </div><br />

                        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-danger">-</button>
                            <span class="bg-danger">Verbal Aggression</span>
                            <button type="button" class="btn btn-danger">+</button>
                        </div><br />
                    </div>
                </div>

                <h3>Positive Behaviors</h3>
                <div class="row">
                    <div class="col-md-4">
                        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-success">-</button>
                            <span class="bg-success">Making a Request</span>
                            <button type="button" class="btn btn-success">+</button>
                        </div><br />

                        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-success">-</button>
                            <span class="bg-success">Talking to Peer</span>
                            <button type="button" class="btn btn-success">+</button>
                        </div><br />
                    </div>
                    <div class="col-md-4">
                        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-success">-</button>
                            <span class="bg-success">Responding to Demand</span>
                            <button type="button" class="btn btn-success">+</button>
                        </div><br />

                        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-success">-</button>
                            <span class="bg-success">Answering Question</span>
                            <button type="button" class="btn btn-success">+</button>
                        </div><br />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BehaviorFrequency;