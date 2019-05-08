import React, {Component} from 'react';

class Comment extends Component {
    render() {
        const { name, comment } = this.props;
        return (
            <div>
              <p>{name}</p>
              <p>{comment}</p>
            </div>
        );
    }
}

export default Comment;