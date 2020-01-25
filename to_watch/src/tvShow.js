import React from "react";
import {getShowDetails} from "./api"
import queryString from "query-string";

export default class TvShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tvShow: {}
        }
    }

  componentDidMount() {
    const { tvShow_id } = queryString.parse(this.props.location.search);
    getShowDetails(tvShow_id).then(data => {
        this.setState({
            tvShow: data
        })
    })
  }

  render() {
    return <h1>{this.state.tvShow.rating}</h1>;
  }
}
