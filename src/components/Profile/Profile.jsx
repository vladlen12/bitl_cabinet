import "./Profile.scss"
import {Progress} from "antd";
import customer from "../../assets/icons/customer.svg";
import RowRadioButtonsGroup from "./Radio";
import DatePickerProfile from "./Picker";

export default function ProfileSection() {

  return (
    <section className="section section--profile">
      <h1 className="h1">
        Profile
      </h1>
      <div className="profile-wrapper board">
        <div className="title">
          Basic information
        </div>

        <div className="profile-user">
          <div className="user-info">
            <div className="user-pic">
              <Progress
                type="circle"
                strokeWidth={6}
                width={68}
                strokeColor={{
                  '15%': '#FF5655',
                  '45%': '#E3E3E7',
                }}
                percent={15}
                format={() => (
                  <img src={customer} alt=""/>
                )}
              />
            </div>

            <div className="upload-data">
              JPG, GIF or PNG.<br />
              Max size of 2MB
            </div>
          </div>
          <div className="btn-wrapper">
            <div className="btn btn--disabled">
              Delete
            </div>
            <div className="btn btn--default">
              Upload
            </div>
            <div className="btn btn--gray">
              Delete
            </div>
          </div>
        </div>

        <div className="profile-data-wrapper">
          <div className="profile-data-item">
            <div className="col-1">
              <div className="title">
                Nikname
              </div>
            </div>

            <div className="col-2">
              <div className="info">
                william
              </div>
            </div>
            <div className="col-3">
              <div className="btn btn--transparent-default">
                Edit
              </div>
            </div>

          </div>
          <div className="profile-data-item change">
            <div className="col-1">
              <div className="title">
                Date of Birthday
              </div>
            </div>

            <div className="col-2">
              <div className="info">
                Choose date
              </div>
            </div>
            <div className="col-3">
              <div className="btn btn--transparent-default">
                Edit
              </div>
            </div>

          </div>
          <div className="profile-data-item change">
            <div className="col-1">
              <div className="title">
                Surname
              </div>
            </div>

            <div className="col-2">
              <div className="info">
                Doe
              </div>
            </div>
            <div className="col-3">
              <div className="btn btn--transparent-default">
                Edit
              </div>
            </div>

          </div>
          <div className="profile-data-item change">
            <div className="col-1">
              <div className="title">
                Name
              </div>
            </div>

            <div className="col-2">
              <div className="info">
                John
              </div>
            </div>
            <div className="col-3">
              <div className="btn btn--transparent-default">
                Edit
              </div>
            </div>

          </div>
          <div className="profile-data-item change">
            <div className="col-1">
              <div className="title">
                Second name
              </div>
            </div>

            <div className="col-2">
              <div className="info">
                Johnson
              </div>
            </div>
            <div className="col-3">
              <div className="btn btn--transparent-default">
                Edit
              </div>
            </div>

          </div>
          <div className="profile-data-item change">
            <div className="col-1">
              <div className="title">
                Sex
              </div>
            </div>

            <div className="col-2">
              <div className="radio-wrapper">
                <RowRadioButtonsGroup />
              </div>
            </div>
            <div className="col-3">
              <div className="btn btn--transparent-default">
                Edit
              </div>
            </div>

          </div>
          <div className="profile-data-item change edit">
            <div className="col-1">
              <div className="title">
                Second name
              </div>
            </div>

            <div className="col-2">
              <div className="info">
                Johnson
              </div>
            </div>
            <div className="col-3">
              <div className="btn btn--transparent-default">
                Edit
              </div>
            </div>

          </div>
          <div className="profile-data-item change warning">
            <div className="col-1">
              <div className="title">
                Second name
              </div>
            </div>

            <div className="col-2">
              <div className="info">
                <input type="text" className="input"/>
                <div className="btn btn--default">
                  Save
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="btn btn--transparent-default">
                cancel
              </div>
            </div>

          </div>
          <div className="profile-data-item change warning">
            <div className="col-1">
              <div className="title">
                Second name
              </div>
            </div>

            <div className="col-2">
              <div className="info">
                <DatePickerProfile />
                <div className="btn btn--default">
                  Save
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="btn btn--transparent-default">
                cancel
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}