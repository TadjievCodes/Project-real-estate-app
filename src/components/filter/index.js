import * as React from 'react'
import classnames from 'classnames'

import styles from '../Hero/styles.module.css'

class Filter extends React.Component {
    constructor(props) {
    super(props)
    this.priceFrom = React.createRef()
    
  }


   state = {
       priceFrom: '',
       postcode: '',
       sortOrder: '',
       sortOrders: ['Highest First', 'Lowest First']
}


  
  submitForm = e => {
    e.preventDefault();
    alert(`The price from is; ${this.priceFrom.current.value}`);
  };

  render() {

   const postcodes = []


    const containerClasses = classnames('container', 'mb-1', styles.container)
    const formClasses = classnames('form-horizontal', styles.form)

    return (
      <div className={containerClasses}>
        <form className={formClasses} 
        noValidate
        onChange={() => setTimeout(() => this.props.updateFilter(this.state), 0)}
        >
          <p className="mb-1">Refine your results</p>
          <div className="columns text-center">
            <div className="column col-4 col-xs-12">
              <div className="form-group">
                <div className="col-3 col-sm-12">
                  <label className="form-label" htmlFor="price-from">
                    Price from
                  </label>
                </div>
                <div className="col-9 col-sm-12">
                  <input
                      className="form-input"
                      min="0"
                      max="10000000"
                      type="number"
                      id="price-from"
                      placeholder="£1,000,000"
                      value={this.state.priceFrom}
                      onChange={event => this.setState({ priceFrom: Number(event.target.value) })}
/>
               
                  </div>
              </div>
            </div>
            <div className="column col-4 col-xs-12">
              <div className="form-group">
                <div className="col-3 col-sm-12">
                  <label className="form-label" htmlFor="postcode">
                    Postcode
                  </label>
                </div>
                <div className="col-9 col-sm-12">
                       <select
                          className="form-select"
                          id="postcode"
                          value={this.state.postcode}
                          onChange={event => this.setState({ postcode: event.target.value })}
                       >
                        <option value="">Choose...</option>
                         {postcodes.map(pc => (
                         <option key={pc} value={pc.toLowerCase()}>
                        {pc}
                        </option>
                        ))}
                      </select>
                </div>
              </div>
            </div>
            <div className="column col-4 col-xs-12">
              <div className="form-group">
                <div className="col-3 col-sm-12">
                  <label className="form-label" htmlFor="sortorder">
                    Sort Order
                  </label>
                </div>
                <div className="col-9 col-sm-12">
                   <select
                        className="form-select"
                        id="sortorder"
                        value={this.state.sortOrder}
                        onChange={event => this.setState({ sortOrder: event.target.value })}
                   >
                 <option value="">Choose...</option>
                {this.state.sortOrders.map(order => (
               <option key={order} value={order.replace(' ', '').toLowerCase()}>
               {order}
               </option>
               ))}
              </select>

                </div>
              </div>
            </div>
          </div>
                   {'...'}

        </form>
      </div>
    )
  }
}

export default Filter




