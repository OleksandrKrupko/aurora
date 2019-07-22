import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Transition } from "react-transition-group";

import { TWO_SIZE_VARIANT } from "../../../utils/sizes";
import { Provider as DropDownProvider } from "./Context";
import SelectionProvider from "../../SelectionProvider/Provider";
import { Consumer as SelectionConsumer } from "../../SelectionProvider/Context";
import {
  ARROWUP,
  ARROWDOWN,
  SPACEBAR,
  ESCAPE,
  TAB
} from "../../../utils/keyCharCodes";
import { VARIANTS_WITH_LABEL_INSIDE, VARIANTS_WITH_BORDER } from "./constants";
import {
  VARIANTS_WITH_LABEL_INSIDE,
  VARIANTS_WITH_BORDER,
  LAYOUTS
} from "./constants";
import {
  StyledGroup,
  StyledChildWrapper,
  StyledGroupWrapper,
  StyledChevron,
  StyledSelectedText,
  StyledKeyboardProvider,
  HiddenLabel,
<<<<<<< HEAD
  StyledOuterLabel
=======
<<<<<<< HEAD
  StyledOuterLabel
=======
>>>>>>> feat(DropDownGroup): Add new layout variant
>>>>>>> feat(DropDownGroup): Add new layout variant
} from "./DropDownGroup.styles";
import DropDownLabel from "./DropDownLabel";

class DropDownGroup extends React.Component {
  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isOpen !== state.isOpenPrevProp) {
      return {
        isOpen: props.isOpen,
        isOpenPrevProp: props.isOpen
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { isOpen } = this.state;
    // scroll dropdown to top after opening
    if (!this.props.isOpen && isOpen && isOpen !== prevState.isOpen) {
      this.styledChildWrapper.current.scrollTop = 0;
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  }

  onClick = () => {
    this.toggleDropdown();
  };

  onKeyDown = e => {
    const { keyCode } = e;
    const { isOpen } = this.state;

    switch (keyCode) {
      case ESCAPE:
        this.closeDropdown();
        break;
      case TAB:
        if (isOpen) {
          e.preventDefault();
        }
        break;
      case ARROWUP:
      case ARROWDOWN:
        e.preventDefault();
        this.openDropdown();
        break;
      case SPACEBAR:
        e.preventDefault();
        this.toggleDropdown();
        break;
      default:
        break;
    }
  };

  getCurrentSelection = value => {
    const selectedItem = React.Children.toArray(this.props.children).find(
      c => c.props.value === value
    );

    return selectedItem && selectedItem.props.children;
  };

  getOuterLabel = () => {
    const { variant, label, size, disabled } = this.props;

    return (
      variant === 2 && (
        <StyledOuterLabel
          className={classNames(`dropdown--${size}`, {
            "dropdown--disabled": disabled
          })}
        >
          {label}
        </StyledOuterLabel>
      )
    );
  };

  closeDropdown = () => this.setState({ isOpen: false });

  openDropdown = () => this.setState({ isOpen: true });

  toggleDropdown = () => {
    if (this.state.isOpen) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  };

  stopInteraction = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleOutsideClick = e => {
    if (this.state.isOpen && !this.groupWrapper.current.contains(e.target)) {
      this.closeDropdown();
    }
  };

  displayLabel = selected => {
    const { placeholder, label, variant } = this.props;

    if (placeholder.length > 0 && selected.length === 0) {
      return placeholder;
    }

    if (
      VARIANTS_WITH_LABEL_INSIDE.includes(variant) &&
      selected.length > 0 &&
      label.length > 0
    ) {
      return (
        <Fragment>
          {label} {this.getCurrentSelection(selected[0])}
        </Fragment>
      );
    }

    return this.getCurrentSelection(selected[0]);
  };

  groupWrapper = React.createRef();
  styledChildWrapper = React.createRef();
  ANIMATION_TIMEOUT = 300;

  /* eslint-disable */
  state = {
    isOpen: false,
    isOpenPrevProp: false,
    onClose: this.onClick
  };
  /* eslint-enable */

  render() {
    const {
      children,
      value,
      valueOverride,
      onChange,
      variant,
      isOpen: isOpenProp,
      keywordSearch,
      withKeyboardProvider,
      placeholder,
      label,
      disabled,
      size,
      shouldOpenDownward,
      ...props
    } = this.props;
    const { isOpen: isOpenState } = this.state;
    const isOpen = isOpenProp || isOpenState;
    const hiddenLabelId = `hidden-label__${(placeholder || label).replace(
      / /g,
      "_"
    )}`;
    const onClickListener = disabled
      ? { onMouseDown: this.stopInteraction }
      : { onClick: this.onClick };
    const isBorderAround = VARIANTS_WITH_BORDER.includes(variant);

    return (
      <SelectionProvider
        onChange={onChange}
        isMultiSelect={false}
        value={value}
        valueOverride={valueOverride}
      >
        <SelectionConsumer>
          {({ selected }) => {
            const keyboardProviderProps = withKeyboardProvider
              ? { keywordSearch, selected }
              : { as: "div" };

            return (
              <Transition in={isOpen} timeout={this.ANIMATION_TIMEOUT}>
                {state => {
                  // keep dropdown--open-upward className until collapse animation is finished (.3s)
                  const hasOpenUpwardClass =
                    state !== "exited" && !shouldOpenDownward;

                  return (
                    <Fragment>
                      {variant === LAYOUTS.VARIANT2 && (
                        <DropDownLabel size={size} disabled={disabled}>
                          {label}
                        </DropDownLabel>
                      )}
                      <StyledGroupWrapper
                        {...props}
                        className={classNames(props.className, {
                          "dropdown--open-upward": hasOpenUpwardClass,
                          "dropdown--disabled": disabled
                        })}
                        tabIndex={disabled ? -1 : 0}
                        aria-haspopup="listbox"
                        aria-labelledby={hiddenLabelId}
                        onKeyDown={this.onKeyDown}
                        ref={this.groupWrapper}
                      >
                        <StyledGroup
                          {...onClickListener}
                          className={classNames(`dropdown--${size}`, {
                            "dropdown--active": isOpen,
                            "dropdown--border": isBorderAround,
                            "dropdown--no-border": !isBorderAround,
                            "dropdown__label--disabled": disabled
                          })}
                        >
                          {/* HiddenLabel is required for correct screen readers 
                          readings when an option is selected */}
                          <HiddenLabel id={hiddenLabelId}>
                            {placeholder || label}
                          </HiddenLabel>
                          <StyledSelectedText
                            className={classNames({
                              "dropdown__text--disabled": disabled
                            })}
                          >
                            {this.displayLabel(selected)}
                          </StyledSelectedText>

                          <StyledChevron
                            className={classNames({
                              "dropdown__icon--hide": isOpen,
                              "dropdown--no-border": !isBorderAround,
                              "dropdown__chevron--disabled": disabled
                            })}
                          />
                        </StyledGroup>
                        <Transition
                          in={isOpen}
                          timeout={this.ANIMATION_TIMEOUT}
                        >
                          {wrapperState => (
                            <StyledChildWrapper
                              className={classNames(
                                "dropdown__items",
                                `dropdown__items--${size}`,
                                {
                                  "dropdown--clicked": isOpen,
                                  "dropdown--overflow":
                                    wrapperState === "entered"
                                }
                              )}
                              ref={this.styledChildWrapper}
                            >
                              <DropDownProvider
                                value={{ ...this.state, isOpen }}
                              >
                                <StyledKeyboardProvider
                                  role="listbox"
                                  aria-labelledby={hiddenLabelId}
                                  {...keyboardProviderProps}
                                >
                                  {children}
                                </StyledKeyboardProvider>
                              </DropDownProvider>
                            </StyledChildWrapper>
                          )}
                        </Transition>
                      </StyledGroupWrapper>
                    </Fragment>
                  );
                }}
              </Transition>
            );
          }}
        </SelectionConsumer>
      </SelectionProvider>
    );
  }
}

DropDownGroup.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  valueOverride: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(LAYOUTS)),
  label: PropTypes.string,
  isOpen: PropTypes.bool,
  keywordSearch: PropTypes.bool,
  withKeyboardProvider: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(TWO_SIZE_VARIANT),
  shouldOpenDownward: PropTypes.bool
};

DropDownGroup.defaultProps = {
  value: [],
  valueOverride: null,
  onChange: null,
  placeholder: "",
  variant: LAYOUTS.VARIANT0,
  isOpen: false,
  keywordSearch: true,
  withKeyboardProvider: true,
  label: "",
  disabled: false,
  size: TWO_SIZE_VARIANT[1],
  shouldOpenDownward: true
};

export default DropDownGroup;
