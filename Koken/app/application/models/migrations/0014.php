<?php

	$c = new Text;
	$c->where('slug', NULL)
		->or_where('slug', '')
		->limit(100)->get_iterated();

	foreach($c as $content)
	{
		$content->slug = '__generate__';
		$content->save();
	}

	$c = new Text;

	if ($c->where('slug', NULL)->or_where('slug', '')->count() === 0)
	{
		$done = true;
	}