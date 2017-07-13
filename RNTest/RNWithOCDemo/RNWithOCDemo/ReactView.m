//
//  ReactView.m
//  RNWithOCDemo
//
//  Created by TonyYang on 2017/7/13.
//  Copyright © 2017年 TonyYang. All rights reserved.
//

#import "ReactView.h"
#import <RCTRootView.h>


@implementation ReactView

- (instancetype)initWithFrame:(CGRect)frame {
    if (self = [super initWithFrame:frame]) {
        NSString *strUrl = @"http://localhost:8081/index.ios.bundle?platform=ios";
        NSURL *jsCodeLocation = [NSURL URLWithString:strUrl];
        RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation moduleName:@"Reactios" initialProperties:nil launchOptions:nil];
        
        [self addSubview:rootView];
        rootView.frame = self.bounds;
    }
    return self;
}

@end
