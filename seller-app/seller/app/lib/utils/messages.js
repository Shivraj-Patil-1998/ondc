const MESSAGES = {
    USER_NOT_EXISTS: 'We couldn\'t find an account with those details',
    INVALID_PIN: 'Incorrect username or password, Please check and try again',
    INVALID_INVITATION_CODE: 'Invalid invitation code. Please check and try again.',
    USER_ALREADY_EXISTS: 'A user with this phone number/email already exists',
    USER_PHONE_ALREADY_EXISTS: 'A user with the given phone already exists',
    USER_EMAIL_ALREADY_EXISTS: 'A user with the given email already exists',
    LOGIN_ERROR_OTP_EXPIRED: 'This OTP is expired. Please request a new OTP',
    LOGIN_ERROR_INCORRECT_CREDENTIALS: 'The login credentials do not match. Please check and try again',
    LOGIN_ERROR_USER_ACCOUNT_DEACTIVATED:
    'Your account is inactive. Please contact your administrator for more details',
    LOGIN_ERROR_USER_ACCESS_TOKEN_INVALID:
    'Unathorized access. Please login again to continue',
    ORGANIZATION_NOT_EXISTS: 'We weren\'t able to find an organization with this details',
    ORGANIZATION_ALREADY_EXISTS:
    'An organization with this name already exists.',
    PRODUCT_ALREADY_EXISTS:
    'A product with this name already exists.',
    ROLE_NOT_EXISTS: 'We couldn\'t find the role with given name',
    ROLE_ALREADY_EXISTS: 'A Role with the given name already exists',
    FORGOT_PASSWORD_SUCCESS: 'A temporary password is sent to your email address',
    SET_PASSWORD_SUCCESS: 'Your password has been set successfully',
    RESET_PASSWORD_SUCCESS: 'Your password has been reset successfully',
    CHANGE_PASSWORD_SUCCESS: 'Your password has been updated successfully',
    USER_NOT_ALLOWED: 'You do not have access to this section, please contact your administrator',
    SINGLE_ITEM_CANNOT_CANCEL:'You cannot cancel single item, cancel complete order',
    LOGIN_ERROR_USER_ACCOUNT_BANNED: 'This user has exceeded the number of failed log-in attempts and has been temporarily locked out of ONDC seller app. Please contact admin',
    PRODUCT_NOT_EXISTS:'We weren\'t able to find any product with this detail',
    MENU_EXISTS:'A menu with the given name already exists',
    MENU_NOT_EXISTS:'We weren\'t able to find Menu with this detail',
    MIN_IS_MANDATORY :'Mininum Qty value must be 1 when Customization Group is mendatory',
    MIN_ISNOT_MANDATORY :'Mininum Qty value must be 0 when Customization Group is not mendatory',
    GROUP_NOT_FOUND: 'We couldn\'t find the group with given details',
    CUSTOMIZATION_GROUP_ALREADY_EXISTS: 'A group with this name already exists',
    CUSTOMIZATION_ALREADY_EXISTS: 'A customization with this name already exists',
    CUSTOMIZATION_RECORD_NOT_FOUND: 'Customization Record not found',
    CUSTOMIZATION_GROUP_MAPPING_NOT_EXISTS: 'Mapping does not exists',
    CIRCULAR_REFERENCE_ERROR: 'Group id already exists',
    NEXT_GROUP_NOT_FOUND: 'Next Group is not present',
    DUPLICATE_ID_FOUND : 'Duplicate id is present',
    CHILD_ID_ERROR: 'Child Id cannot be a Parent Id',
    CIRCULAR_REFERENCE_DETECT: 'A parent detected in next groups !!',
    UNDEFINED_CONFLICT_ERROR: 'Group Id has an undefined parent',
    CUSTOMIZATION_GROUP_EXISTS_FOR_ONE_OR_MORE_PRODUCTS: 'Cannot delete customization group. It is used in one or more products.',
    CUSTOMIZATION_GROUP_CHILD: 'Cannot delete customization group. It is a child in the mapping table.',
    SEQ_CHILD_ERROR: 'Cannot update seq value to a value less than the seq value of a child group.',
    SE_NEXTGROUP_ERROR: 'Cannot update seq value to a value greater than or equal to the seq value of the next group.',
    CUSTOMIZATION_GROUP_NOT_EXISTS: 'We couldn\'t find the customization group with given details',
    STATUS_UPDATE_NOT_ALLOWED : 'You can not update fulfillment status',
    STATUS_UPDATE_PREVENT : 'Unable to update fulfillment status for given type'

};

export default MESSAGES;
