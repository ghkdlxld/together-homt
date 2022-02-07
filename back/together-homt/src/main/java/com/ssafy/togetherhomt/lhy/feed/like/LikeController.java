package com.ssafy.togetherhomt.lhy.feed.like;

import com.ssafy.togetherhomt.feed.Feed;
import com.ssafy.togetherhomt.feed.FeedRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping(produces = "application/json; charset=UTF-8")
@AllArgsConstructor
public class LikeController {

    private LikeService likeService;

    private FeedRepository feedRepository;


    @GetMapping("/feed/{feed-id}/likes")
    public ResponseEntity<?> getFeedLikes(@PathVariable("feed-id") Long feedId) {
        Optional<Feed> optFeed = feedRepository.findById(feedId);
        if (!optFeed.isPresent())
            return new ResponseEntity<>("Bad Request. 해당하는 피드가 존재하지 않습니다.", HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(likeService.getFeedLikes(optFeed.get()), HttpStatus.OK);
    }

}
