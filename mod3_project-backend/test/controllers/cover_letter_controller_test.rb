require 'test_helper'

class CoverLetterControllerTest < ActionDispatch::IntegrationTest
  test "should get content:string" do
    get cover_letter_content:string_url
    assert_response :success
  end

end
