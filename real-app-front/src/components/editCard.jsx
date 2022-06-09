import withRouter from "./common/withRouter";
import Joi from "joi";
import cardsService from "../services/cardsService";
import { toast } from "react-toastify";
import PageHeader from "./common/pageHeader";
import Form from "./common/form";

class EditCard extends Form {
  state = {
    form: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
  };

  async componentDidMount() {
    const cardId = this.props.params.id;

    const { data } = await cardsService.getCard(cardId);
    this.setState({ form: this.mapToViewModel(data) });
  }

  mapToViewModel({
    _id,
    bizName,
    bizDescription,
    bizAddress,
    bizPhone,
    bizImage,
  }) {
    return {
      _id,
      bizName,
      bizDescription,
      bizAddress,
      bizPhone,
      bizImage,
    };
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.props.navigate("/my-cards");
  };

  schema = {
    _id: Joi.string().required(),
    bizName: Joi.string().min(2).max(255).required().label("Name"),
    bizDescription: Joi.string()
      .min(2)
      .max(1024)
      .required()
      .label("Description"),
    bizAddress: Joi.string().min(2).max(400).required().label("Address"),
    bizPhone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/)
      .label("Phone"),
    bizImage: Joi.string().min(11).max(1024).label("Image").allow(""),
  };

  async doSubmit() {
    try {
      await cardsService.editCard(this.state.form);
      toast.info("card is updated");
      this.props.navigate("/my-cards");
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { bizImage: response.data } });
      }
    }
  }

  render() {
    return (
      <>
        <PageHeader
          title={
            <>
              <i className="fa-solid fa-square-pen"></i> Edit a card
            </>
          }
        />
        <div className="row">
          <div className="col-12">
            <p>Edit Business Card.</p>
          </div>
        </div>

        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          {this.renderInput({ name: "bizName", label: "Business Name" })}
          {this.renderInput({
            name: "bizDescription",
            label: "Business Description",
          })}
          {this.renderInput({ name: "bizAddress", label: "Business Address" })}
          {this.renderInput({ name: "bizPhone", label: "Business Phone" })}
          {this.renderInput({ name: "bizImage", label: "Business Image" })}

          <div className="my-2">
            <button
              onClick={this.handleCancel}
              className="btn btn-secondary ml-2 me-3"
            >
              Cancel
            </button>
            {this.renderButton("Save")}
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(EditCard);
