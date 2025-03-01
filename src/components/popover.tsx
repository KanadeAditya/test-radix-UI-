// src/app/dashboard/page.tsx or src/pages/dashboard.tsx
'use client'
import { Component, useState } from 'react';
import { Popover, Box, TextArea, Flex, Text, Checkbox, Button, Avatar } from '@radix-ui/themes';
import { ChatBubbleIcon } from '@radix-ui/react-icons';

export default function PopoverComponent() {

    return (
            <Popover.Root>
                <Popover.Trigger>
                    <Button variant="soft">
                        <ChatBubbleIcon width="16" height="16" />
                        Comment
                    </Button>
                </Popover.Trigger>
                <Popover.Content width="360px">
                    <Flex gap="3">
                        <Avatar
                            size="2"
                            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                            fallback="A"
                            radius="full"
                        />
                        <Box flexGrow="1">
                            <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
                            <Flex gap="3" mt="3" justify="between">
                                <Flex align="center" gap="2" asChild>
                                    <Text as="label" size="2">
                                        <Checkbox />
                                        <Text>Send to group</Text>
                                    </Text>
                                </Flex>

                                <Popover.Close>
                                    <Button size="1">Comment</Button>
                                </Popover.Close>
                            </Flex>
                        </Box>
                    </Flex>
                </Popover.Content>
            </Popover.Root>
    );
}