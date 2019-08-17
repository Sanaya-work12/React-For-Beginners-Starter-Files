import React from 'react'; //whole package
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    myInput = React.createRef();

    goToStore = (event) => {
        {/* use a property to bind this */ }
        {/* first value or current returns react value or input tag inside the ref */ }
        {/* second value returns javascript value or user input inside the input tag */ }
        event.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    }


    render() {
        {/* return only one element or one single wrapper with multiple children*/ }
        {/* or use <React.Fragment> or <Fragment> tag to returnmultiple children without a wrapping tag*/ }
        {/* do not add comment inside the return statement, rather add inside the rendering element */ }
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store.</h2>
                <input type="text"
                    required
                    ref={this.myInput}
                    placeholder="Store Name"
                    defaultValue={getFunName()} />
                <button type="submit"> VISIT STORE →</button>
            </form>
        );
    }
}

export default StorePicker;