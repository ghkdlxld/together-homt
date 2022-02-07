package com.ssafy.togetherhomt.user.info;

import com.ssafy.togetherhomt.user.User;
import com.ssafy.togetherhomt.user.follow.Follow;
import io.swagger.annotations.ApiParam;
import lombok.*;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    @ApiParam(value = "사용자 계정 주소")
    @NotNull
    @Size(max = 50)
    private String email;

    @ApiParam(value = "사용자 계정 별명(nickname)")
    @NotNull
    @Size(min = 3, max = 10)
    private String username;

    private String introduce;

    private String profileUrl;

    private List<UserDto> followers;
    private List<UserDto> followings;

    public UserDto(User user) {
        this.email = user.getEmail();
        this.username = user.getUsername();
        this.introduce = user.getIntroduce();
        this.profileUrl = user.getProfile_url();
//        this.followers = user.getFollower();
    }

    public UserDto(User user, boolean detailed) {
        this.email = user.getEmail();
        this.username = user.getUsername();
        this.introduce = user.getIntroduce();
        this.profileUrl = user.getProfile_url();

        if (detailed) {
            List<UserDto> followers = new ArrayList<>();
            for (Follow follower : user.getFollower())
                followers.add(new UserDto(follower.getFollower()));
            this.followers = followers;

            List<UserDto> followings = new ArrayList<>();
            for (Follow following : user.getFollowing())
                followings.add(new UserDto(following.getFollowing()));
            this.followings = followings;
        }
    }

    public UserDto(String email, String username) {
        this.email = email;
        this.username = username;
    }

}
