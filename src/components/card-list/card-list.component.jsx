import { Component } from "react";

class CardList extends Component {

    render() {
        const { monsters } = this.props;
        return (
            <div>
                {monsters}
            </div>
        )
    }
}

export default CardList;