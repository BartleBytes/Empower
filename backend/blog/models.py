from django.db import models
from wagtail import blocks
from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField
from wagtail.fields import RichTextField, StreamField
from wagtail.images.blocks import ImageChooserBlock
from wagtail.models import Page


class BlogPage(Page):
    template = "blog/blog_page.html"
    intro = RichTextField(blank=True)
    hero_image = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
    )
    body = StreamField(
        [
            ("paragraph", blocks.RichTextBlock(features=["bold", "italic", "link", "ol", "ul"])),
            ("image", ImageChooserBlock()),
        ],
        use_json_field=True,
        blank=True,
    )

    content_panels = Page.content_panels + [
        FieldPanel("intro"),
        FieldPanel("hero_image"),
        FieldPanel("body"),
    ]

    parent_page_types = ["home.HomePage"]
    subpage_types = []

    api_fields = [
        APIField("intro"),
        APIField("hero_image"),
        APIField("body"),
        APIField("first_published_at"),
        APIField("seo_title"),
        APIField("search_description"),
    ]
